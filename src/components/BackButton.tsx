import './css/BackButton.css';

interface Props{
  redirect: ()=> void;
  fade: boolean;
}


function BackButton(props: Props) {
  return (
    <div className={props.fade ? "wrapper-fade": "wrapper"} onClick={()=> props.redirect()}>
      <div className="back-button" onClick={()=> props.redirect()}>
        <span>&lt;</span> Return
      </div>
    </div>
    
  );
}

export default BackButton;
