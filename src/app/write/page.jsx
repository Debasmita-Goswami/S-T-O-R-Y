"use client";
import RichTextEditor from "./RichTextEditor";
import { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";

const WritePage = () => {
  const handleEditorChange = (editorState) => {
    // Handle the editor state change as needed
    console.log(editorState.getCurrentContent().getPlainText());
  };

  const [open,setOpen] = useState(false)
  const [value,setValue] = useState("")

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16}/>
        </button>
        {open && (<div className={styles.add}>
        <button className={styles.addButton}>
          <Image src="/image.png" alt="" width={16} height={16}/>
        </button>
        <button className={styles.addButton}>
          <Image src="/external.png" alt="" width={16} height={16}/>
        </button>
        <button className={styles.addButton}>
          <Image src="/video.png" alt="" width={16} height={16}/>
        </button>
        </div>
        )}
        <RichTextEditor onChange={handleEditorChange} />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}
export default WritePage;
 