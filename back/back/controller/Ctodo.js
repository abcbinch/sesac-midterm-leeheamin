const { Todo } = require("../models/index");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  try {
    const allTodos = await Todo.findAll();

    console.log(allTodos.data);

    res.send(allTodos);
  } catch (err) {
    console.log(err);
  }
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  try {
    const oneTodo = await Todo.findOne({
      where: {
        id: req.params.id, //임시시
      },
    });

    res.send({
      id: oneTodo.id,
      title: oneTodo.title,
      done: oneTodo.done,
      createdAt: oneTodo.createdAt,
      updatedAt: oneTodo.updatedAt,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      title: req.body.title,
      done: req.body.done,
    });
  } catch (err) {
    console.log(err);
  }
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  try {
    const changeTodo = await Todo.update(
      {
        where: {
          id: req.params.id, //임시
        },
      },
      {
        title: req.body.title,
        done: req.body.done,
      }
    );
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  try {
    const deleteTodo = await Todo.destroy({
      where: {
        id: req.params.id, //임시시
      },
    });

    if (deleteTodo) {
      res.send({
        message: "Todo deleted successfully",
        deletedId: 1,
      });
    } else {
      res.send({ message: "Todo not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
