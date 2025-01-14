import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <div className={s.loadMoreBtnContainer}>
    <button className={s.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  </div>
);
export default LoadMoreBtn;
