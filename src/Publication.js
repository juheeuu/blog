export function Publication(props) {
    return(
      <div style={{"line-height": 26}}>
          <img src={props.img} style={{width: 250, float: 'left', marginRight: 20}}/>
          <div style={{"font-size": 20, "font-weight": 'bold', marginBottom: 4}}><a href={props.paperlink}>{props.title}</a></div>
          <ul>
              <li>
              {props.authors}
              </li>
              <li>
              {props.conf}
              </li>
              <li>
              {props.contents}
              </li>
          </ul>
      </div>
    );
}
