import headerStyle from './css/header.module.css';

const Header = (props) => {
  return (
      <header className={headerStyle.root} title={props.title} descr={props.descr}>
        <div className={headerStyle.forest}/>
        <div className={headerStyle.container}>
          <h1>{props.title}</h1>
          <p>{props.descr}</p>
        </div>
      </header>
  );
}

export default Header;