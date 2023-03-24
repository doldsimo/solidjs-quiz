import { Button, HStack, Textarea, useColorMode, Switch } from "@hope-ui/solid";
import { BsLightbulbOffFill } from 'solid-icons/bs';
import { BsLightbulbFill } from 'solid-icons/bs';
import styles from './DarkModeButton.module.css';

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div class={styles.container}>
      <Switch onChange={toggleColorMode} defaultChecked={colorMode() === 'dark'}  >
        {colorMode() === 'light' ? <BsLightbulbFill /> : <BsLightbulbOffFill />}
      </Switch>
    </div>
  )
}

export default DarkModeButton;