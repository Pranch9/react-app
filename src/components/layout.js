import layoutStyle from './css/layout.module.css';

const Layout = (props) => {
  return (
      <section className={layoutStyle.root}
               id={props.id}
               title={props.title}
               descr={props.descr}
               urlBg={props.colorBg}
               colorBg={props.colorBg}>
        <div className={layoutStyle.wrapper}>
          <article>
            <div className={layoutStyle.title}>
              <h3>{props.title}</h3>
              <span className={layoutStyle.separator}/>
            </div>
            <div className={layoutStyle.desc.full}>
              <p>{props.descr}</p>
            </div>
          </article>
        </div>
      </section>
  );
}

export default Layout;