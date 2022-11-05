from chatbot import *
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

app = FastAPI()
engagement_chatbot = EngagmentChatbot()
sarcastic_chatbot = ConversationalChatbot()

@app.get("/engagment", response_class=HTMLResponse)
def inactive_user_engagment(request: Request):
    habit = request.query_params.get('habit')
    answer = iterative_generation(engagement_chatbot, habit)
    return answer[0]["generated_text"]
 
@app.get("/conversational")
def get_conversational_chatbot_response(query : str):
    return sarcastic_chatbot(query)
    
    
    