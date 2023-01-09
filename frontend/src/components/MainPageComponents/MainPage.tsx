import { Link } from "react-router-dom";
import AppPic from "../../images/some-profile-pic.jpg";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="position-absolute bottom-50">
        <h1 className="display-2">Welcome To the Expense Report App</h1>
        <div className="row d-flex justify-content-center">
          <button className="mx-3 col-2 btn btn-secondary btn-lg">
            <Link className="text-white text-decoration-none" to="/login">
              Login
            </Link>
          </button>
          <button className="mx-3 col-2 btn btn-secondary btn-lg">
            <Link className="text-white text-decoration-none" to="/about-us">
              About Us
            </Link>
          </button>
        </div>
      </div>
    </div>
    // <div className={styles.main}>
    //   <div className={styles.section}>
    //     <h1>Welcome to Expense Report</h1>
    //     <div className={styles.actions}>
    //       <table>
    //         <tbody>
    //           <tr>
    //             <td>
    //               <button>
    //                 <Link to="/graph">To Graph</Link>
    //               </button>
    //             </td>
    //             <td>
    //               <button>
    //                 <Link to="/expense-list">To Expense List</Link>
    //               </button>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    //   <div className={styles.section}>
    //     <h2>Contributors</h2>
    //     <div className={styles.content}>
    //       <div className={styles.image}>
    //         <img src={AppPic} alt="App Pic"></img>
    //       </div>
    //       <section className={styles.text}>
    //         <p>
    //          INSERT PIC AND DESCRIPTION OF CONTRIBUTORS
    //         </p>
    //       </section>
    //     </div>
    //   </div>
    // </div>
  );
};
export default MainPage;
