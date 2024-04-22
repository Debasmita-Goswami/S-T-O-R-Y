import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Debasmita Goswami</span>
                        <span className={styles.date}>19.1.24</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci quisquam doloribus corrupti assumenda atque incidunt, animi ullam ex, aliquam vitae eum sapiente iusto corporis dolor, consequuntur ipsa unde veniam?</p>
                <h2>Lorem ipsum dolor sit amet </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci quisquam doloribus corrupti assumenda atque incidunt, animi ullam ex, aliquam vitae eum sapiente iusto corporis dolor, consequuntur ipsa unde veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci quisquam doloribus corrupti assumenda atque incidunt, animi ullam ex, aliquam vitae eum sapiente iusto corporis dolor, consequuntur ipsa unde veniam?</p>
                </div>
                <div className={styles.comment}>
                    <Comments/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}
export default SinglePage