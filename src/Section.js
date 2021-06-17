
export function Section(props) {
    return(
        <div style={{marginTop: 30, marginBottom: 50}}>
        <div className="block" style={{marginTop: 20, textAlign: 'left', marginLeft: '15vw', marginRight: '15vw', marginBottom: 80}}>
          <div className="block-title" style={{"font-size": 28, "color": "#D97925", marginLeft: 10, textDecoration: 'underline'}}> {props.title} </div>
          {props.innerdiv}
        </div>
        <hr/>
      </div>
    );
}
