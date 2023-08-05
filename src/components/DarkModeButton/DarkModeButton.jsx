import { Button, HStack, Textarea, useColorMode, Switch } from "@hope-ui/solid";
import { BsLightbulbOffFill } from 'solid-icons/bs';
import { BsLightbulbFill } from 'solid-icons/bs';
import styles from './DarkModeButton.module.css';

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div class={styles.container} style={{ cursor: "pointer" }}>
      {colorMode() === 'light' ? <BsLightbulbFill onClick={toggleColorMode} /> : <BsLightbulbOffFill onClick={toggleColorMode} />}
    </div>
  )
}

export default DarkModeButton;