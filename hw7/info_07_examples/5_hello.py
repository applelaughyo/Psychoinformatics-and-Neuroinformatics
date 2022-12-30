from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", response_class=PlainTextResponse)
def read_root(greet:str="Hello",name:str=""):
   return(f"{greet} {name}")

@app.get("/{name}")
def read_name(name:str=""):
   return {"name": name}

@app.get("/{greet}/{name}")
def read_all(greet:str="Aloha",name:str="Tren"):
   return {"greet": greet, "name": name}
