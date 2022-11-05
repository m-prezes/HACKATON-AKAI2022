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

@app.post("/")
async def inactive_user_engagment(query : Request):
    message = await query.json()
    answer = iterative_generation(engagement_chatbot, message['message'])
    return {'response': answer[0]["generated_text"]}
 
@app.post("/conversation")
async def get_conversational_chatbot_response(query : Request):
    message = await query.json()
    return {'response': sarcastic_chatbot(message['message'])}
    

@app.post('/fd')
async def root(request: Request):
    return await request.json()
    
    