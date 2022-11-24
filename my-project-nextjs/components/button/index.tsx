// import styleBtn from './button.modules.css';
import btnstyles from './myButton.module.css'

type Props = {
  label: string;
}

export const Button = ({ label }: Props) => {
  return (
    <button
      className={btnstyles.myBtn}
      onClick={() => { alert('Clicou no botão') }}
    >
      {label}
    </button>
  )
}
