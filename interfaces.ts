interface Todo
{
    title:string;
    text:string;
}

function showTodo(todo:Todo)
{
    console.log(todo.title +" : "+todo.text);
}
var myTo={title:'Bhuvanesh', text : 'Welcome to BizRuntime'}

showTodo(myTo);