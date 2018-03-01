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
const teachers = [
  {
    name: 'Daniel',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Creative-Tail-People-boy.svg/1024px-Creative-Tail-People-boy.svg.png'
  },
  {
    name: 'Alvaro',
    avatar: 'https://assets.gitlab-static.net/uploads/-/system/user/avatar/56386/tt_avatar_small.jpg'
  }
]

const Avatar = props => <img className="avatar" src={props.user.avatar} alt={props.user.name}/>;
const UserName = props => <p>{props.user.name}</p>

const User = props => {
  return (
    <div className="user-item">
      <Avatar user={props.user}/>
      <UserName user={props.user} />
    </div>
  )
}

const UsersList = props => {
  const userList = props.list.map((user, i) => <User user={user} key={i} />);
  return (
    <div className="user-list">
      {userList};
    </div>
  )
}


ReactDOM.render( <UsersList list={teachers}/>,
  document.getElementById('box')
);

