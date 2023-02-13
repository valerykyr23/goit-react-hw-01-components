import css from "./Statistics.module.css";
export const Statistics = ({ title, stats }) => {
     return <section className={css.statistics}>
         <h2 className={css.title}>{title}</h2>

  <ul className={css.stats__list}>
             {stats.map(info => (<li key={info.id} className={css.stats}>
        <span className={css.label}>{info.label}</span>
        <span className={css.percentage}>{info.percentage}</span>
    </li>))}
  </ul>
</section>
}
 

//   <ul className={css.stats__list}>
//     <li className={css.stats}>
//         <span className={css.label}>{stats.label}</span>
//         <span className={css.percentage}>{stats.percentage}</span>
//     </li>
//     <li className={css.stats}>
//       <span className={css.label}>{stats.label}</span>
//       <span className={css.percentage}>{stats.percentage}</span>
//     </li>
//     <li className={css.stats}>
//       <span className={css.label}>{stats.label}</span>
//       <span className={css.percentage}>{stats.percentage}</span>
//     </li>
//     <li className={css.stats}>
//       <span className={css.label}>{stats.label}</span>
//       <span className={css.percentage}>{stats.percentage}</span>
//     </li>
//   </ul>