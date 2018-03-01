'use strict';

// const el = React.createElement('h1', {id:'title'}, 'hola ', React.createElement('span', null, 'mundo'));
// ReactDOM.render(el, document.getElementById('box'));

// Con React u JSX
// const el = (
//   <h1 id="title" className= "title">
//     Hola {2+5}
//     <span>mundo</span>
//   </h1>);

// Transpilando con prepros
// ReactDOM.render(el, document.getElementById('box'));
/* const app = document.getElementById('box');
function reloj() {
  const now = new Date().toLocaleTimeString();
  const el = <span>{now}</span>;
  ReactDOM.render(el, app);
}

setInterval(reloj,1000); */

// function Saludar(props) {
//   return <h1>Hola {props.name}</h1>
// }
// ReactDOM.render(
//   <div>
//     <Saludar name="Daniel"/>
//     <Saludar name="Alexys"/>
//     <Saludar name="Carlos"/>
//   </div>,
//   document.getElementById('box')
// );

// componente reutilizable imagen y nombre
var teachers = [{
  name: 'Daniel',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Creative-Tail-People-boy.svg/1024px-Creative-Tail-People-boy.svg.png'
}, {
  name: 'Alvaro',
  avatar: 'https://assets.gitlab-static.net/uploads/-/system/user/avatar/56386/tt_avatar_small.jpg'
}];

var Avatar = function Avatar(props) {
  return React.createElement('img', { className: 'avatar', src: props.user.avatar, alt: props.user.name });
};
var UserName = function UserName(props) {
  return React.createElement(
    'p',
    null,
    props.user.name
  );
};

var User = function User(props) {
  return React.createElement(
    'div',
    { className: 'user-item' },
    React.createElement(Avatar, { user: props.user }),
    React.createElement(UserName, { user: props.user })
  );
};

var UsersList = function UsersList(props) {
  var userList = props.list.map(function (user, i) {
    return React.createElement(User, { user: user, key: i });
  });
  return React.createElement(
    'div',
    { className: 'user-list' },
    userList,
    ';'
  );
};

ReactDOM.render(React.createElement(UsersList, { list: teachers }), document.getElementById('box'));