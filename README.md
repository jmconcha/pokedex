# Pokedex React App



## Live Demo
https://pokedex-demo-app.herokuapp.com

 

## Folder Structure
"dist" contains the build version and it is ready to deploy
"source-code" contains the source code, excluding the libraries. You will need to install the dependencies before running the app.
"README.md" documentation



## Steps to run the application

1. Navigate to the root folder of the project.

2. Go to "source-code"

3. Install dependencies by typing "npm i" or "npm install" on your terminal.

4. Type "npm start" on your terminal.



## Component Hierarchy

App
	Header
	Content
		Loading
		Cards
			Card
				Types
		Error
	Footer

App will be our application that contains Header, Content, and Footer.
Header and Footer are just a basic component.
Content will be the container of Loading, Cards, and Error component.
At first load, Loading will be rendered while fetching the pokemon data through the fake API I created.
On fetching the data I used `fetch` API because what I'll be doing is just a `GET` request.
So this is enough, no need for other libraries to be installed.
When the fetching is done. Card Will be rendered that contains pokemon data based on the response.
If an error occurs while requesting pokemon data, an Error component will be rendered.
And there is the Types component.
I decided to make it a component because I saw that pokemon can have more than one type.
So I make it this way to make it reusable and to generate types dynamically.
Regarding the fake API. I created one to create an application that really works on API.
fake-pokedex-api: https://my-json-server.typicode.com/jmconcha/fake-pokedex-api



## Improvements That I Could Make
I really want to make it interactive. Like, the pokemon moves when the user hovers a pokemon card.
And when the user clicks it. A modal will pop up and show the information about that pokemon. Types, abilities, other forms, and etc.




## What Would I Do Differently

If I were allocated more time I would add pagination functionality.
Then create a complete API to serve pokemon data.



## If there is any problem on the application. Please let me know. I am happy to fix it. Thanks!