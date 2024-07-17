
import styles from './PopoverDemo.module.css'

function PopoverDemo () {
  return (
    <article>
      <h2>PopoverDemo</h2>
      <button popovertarget='my-popover'>open Popover</button>
      <div class={styles.settingsPopover} id='my-popover' popover>
        <h4>this is poping over</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum
          autem nisi numquam aperiam voluptates laudantium saepe laboriosam a
          distinctio!
        </p>
      </div>
    </article>
  )
}
export default PopoverDemo
