/* 1. https://jsonplaceholder.typicode.com/todos 로부터 데이터를 불러와서 추가해주는 함수 getTodos() 선언 */
// getTodos()는 추후에 HTML DOM 내용이 완전히 로드되었을 때 실행되어야 합니다.

async function getTodos() {
  const todoList = await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  const result = todoList.data.slice(0, 10);

  const listPlace = document.querySelector(".todoList");

  const ul = document.createElement("ul");
  ul.classList.add("your-todo");

  for (let k = 0; k < 10; k++) {
    const checkbox$ = document.createElement("input");
    checkbox$.setAttribute("type", "checkbox");
    const li$ = document.createElement("li");
    const xBtn$ = document.createElement("input");
    xBtn$.setAttribute("type", "button");
    xBtn$.setAttribute("value", "X");
    xBtn$.addEventListener("onclick", deleteTodo);
    li$.append(checkbox$);
    li$.append(result[k].title);
    li$.append(xBtn$);
    ul.append(li$);
  }

  listPlace.append(ul);
}

// todo 체크 시 취소선 추가/글씨 색 변경
const todoCheck = document.querySelectorAll('input[type="checkbox"]');

for (let k = 0; k < todoCheck.length; k++) {
  if (todoCheck[k].checked) {
    const checkLi = todoCheck[k];
    console.log(checkLi);
  }
}

/* 
  2. 새로운 입력창의 Todo를 Todo 목록에 추가하고, 입력창을 초기화합니다.
  - 공백이나 빈 문자열의 경우 추가될 수 없습니다.
  - 작성 버튼 클릭 시 addTodo() 함수가 실행됩니다.
  - 입력 창에서 Enter 키 입력시에도 addTodo() 함수가 실행됩니다.
*/
function addTodo() {
  const ul = document.querySelector(".your-todo");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const todo = document.getElementById("todo").value;

  if (todo === "") {
    alert("내용을 입력해주세요.");
    return false;
  }

  li.append(checkbox);
  li.textContent = todo;
  ul.append(li);
}

/*  3. x 버튼을 클릭하면 클릭한 버튼을 갖는 Todo 항목이 삭제됩니다. */
// 삭제 함수의 이름 및 모양 변경 가능
function deleteTodo(item) {}

/* 
 4. Todo 목록 불러오기,  
 - GET https://jsonplaceholder.typicode.com/todos 요청의 응답 결과에서 맨 처음부터 10개의 원소만 잘라내어 
   투두 목록에 초기 Todo를 표시해야 합니다.
 - HTML 문서의 DOM 내용이 완전히 로드되었을 때 실행됩니다.
 - 따로 함수를 만들어도 좋고, 함수를 만들지 않아도 좋습니다.
*/
window.addEventListener("DOMContentLoaded", getTodos);
