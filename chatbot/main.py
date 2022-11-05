from chatbot import *
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

from fastapi.middleware.cors import CORSMiddleware
import json
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
engagement_chatbot = EngagmentChatbot()
sarcastic_chatbot = ConversationalChatbot()

@app.get("/engagment", response_class=HTMLResponse)
def inactive_user_engagment(request: Request):
    habit = request.query_params.get('habit')
    answer = iterative_generation(engagement_chatbot, habit)
    return answer[0]["generated_text"]
 
@app.post("/")
async def get_conversational_chatbot_response(query : Request):
    message = await query.json()
    return {'response': sarcastic_chatbot(message['message'])}
    

@app.post('/fd')
async def root(request: Request):
    return await request.json()
    
    