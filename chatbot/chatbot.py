import argparse
import json
import os
import requests
from typing import Optional
from abc import ABC
import re


class Prompt(ABC):
    def __init__(self, prompt: str):
        self.prompt = prompt

    def generate(self, question: str, documents: Optional[list[str]]) -> str:
        pass
    
    def __str__(self) -> str:
        pass
    
# Was Google too busy? 
sarcastic_chatbot_prompt = """Marv is a chatbot that reluctantly answers questions with sarcastic responses:

You: How many pounds are in a kilogram?
Marv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.

You: What does HTML stand for?
Marv: Hypertext Markup Language. The T is for try to ask better questions in the future.

You: When did the first airplane fly?
Marv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.

You: What is the meaning of life?
Marv: I’m not sure. I’ll ask my friend Google.

You: {user_input}
Marv: """

user_engagement_few_shot_prompt_let_me_know = """
You're an encouraging helping users to keep track of their healthy habits. One of the users didn't engage with the app for a while. 
Be as friendly as possible and try to get the user to engage with the app again by asking a question about their latest habit: duolingo. End the conversation with a question if the user needs any help or recommendations.
Start now: The best way to keep on improving your language skills is to attempt at reading or writing atleast a few sentences. If you've got bored of duolingo, I can recommend you new material to learn from.

You're an encouraging, helpful and creative AI assistant helping a user to keep track of their daily meditation practice, but the user haven't logged in for 3 days. Make the user feel welcome and encourage them to log in again. End the conversation with a question if the user needs any help or recommendations.
Start now: Meditation practice isn't about trying to throw ourselves away and become something. It's about befriending who we are aleady. It's best if you meditate in a quiet place, where you won't be disturbed. If you need any help or have any questions, please let me know.

You're an encouraging, helpful and creative AI assistant interacting user keep track of daily caloric intake, but the user hasn't recorded it for 5 days. Kindly remind the user to record their caloric intake. End the conversation with a question if the user needs any help or recommendations.
Start now: Hey, I've noticed you haven't been recording your caloric intake for a while. Remember that one of the best ways to be healthy is to keep track of what you eat. If you need any recipe ideas, I can point you to some of the healthiest and tastiest meals.

You're an encouraging, helpful and creative AI assistant noticing a user hasn't recorded their basketball practice for 3 days. Encourage the user and mention his last great match. End the conversation with a question if the user needs any help or recommendations.
Start now: Hi, I've seen you haven't recorded your last basketball game. I'm here to remind you that you've play one of your best games last week. You're on a good track and if you need to reschedule your next game, I can help you with that.

You're an encouraging, helpful and creative AI assistant noticing a user hasn't recorded their chess practice for 2 days. Encourage the user to play a game and record it in the app. End the conversation with a question if the user needs any help or recommendations.
Start now: Hi, I've seen you haven't recorded your last chess game. Recently I've read a great article about how chess can help you improve your memory. 

You're an encouraging, helpful and creative AI assistant noticing a user hasn't recorded their {habit} habit for 3 days. Encourage the user and mention the effort that the user has already put into the habit. End the conversation with a question if the user needs any help or recommendations.
Start now:
"""

class SarcasticConversationWithUserPrompt(Prompt):
    def __init__(self):
        super().__init__(sarcastic_chatbot_prompt)
        
    def generate(self, user_input: str) -> str:
        return sarcastic_chatbot_prompt.format(user_input=user_input)
    
    def __str__(self):
        return "Sarcastic converation with user prompt"

class FewShotUserEngagmentPrompt(Prompt):
    def __init__(self):
        super().__init__(user_engagement_few_shot_prompt_let_me_know)
    
    def generate(self, habit: str) -> str:
        return self.prompt.format(habit=habit)
    
    def __str__(self):
        return "Engage with user prompt - few shot"
    
class BLOOM176bAPI:
    def __init__(self):
        try:
            with open(
                f"{os.path.dirname(os.path.abspath(__file__))}/api_key.json", "r"
            ) as f:
                API_KEY = json.load(f)["APIkey"]
        except (FileNotFoundError, KeyError):
            print("api_key.json not found or incorrect file structure.")
            exit(0)
        self.API_URL = "https://api-inference.huggingface.co/models/bigscience/bloom"
        self.headers = {"Authorization": f"Bearer {API_KEY}"}
        
    def query(self, payload) -> str:
        data = json.dumps(payload)
        response = requests.post(self.API_URL, headers=self.headers, data=data)
        return response.json()
    def __str__(self) -> str:
        return "BLOOM 176b huggingface.co API"
        
def postprocess_answer(answer: str) -> str:
    return re.sub(r"\.\s.*$", ".", answer)

class ConversationalChatbot:
    def __init__(self):
        self.large_language_model = BLOOM176bAPI()
        self.prompt_generator = SarcasticConversationWithUserPrompt()

    def __call__(self, query):
        prompt = self.prompt_generator.generate(query)
        generated_answer = self.large_language_model.query({"inputs": prompt, "max_num_tokens": 200})

        split_answer = generated_answer[0]["generated_text"].split("\n")
        last_user_input = f"You: {query}"        
        
        ind = -1
        for i, line in enumerate(split_answer):
            if line == last_user_input:
                ind = i + 1
                break
        
        return split_answer[ind]
        
    def conversation(self):
        while(True):
            context = ''
            user_input = str(input("Ask chatbot: "))
            context += user_input
            print(self(user_input))
            


def iterative_generation(model, habit, num_iter : int = 2):
    prompt = model.prompt_generator.generate(habit=habit)
    generated_answer = model.large_language_model.query({"inputs": prompt, "max_num_tokens": 200})
    for _ in range(num_iter):
        generated_answer = model.large_language_model.query({"inputs": generated_answer[0]["generated_text"], "max_num_tokens": 200})
        
    return generated_answer
    
    
class EngagmentChatbot():
    def __init__(self):
        self.large_language_model = BLOOM176bAPI()
        self.prompt_generator = FewShotUserEngagmentPrompt()
        
    def __call__(self, habit):
        answer = iterative_generation(self, habit)
        
        idx = answer[0]["generated_text"].rfind('.')
        final_answer = answer[0]["generated_text"][:idx+1]
        return final_answer
        
if __name__ == "__main__":
    chatbot = ConversationalChatbot()
    chatbot.conversation()
    
    # EngagmentChatbot()("cooking")

