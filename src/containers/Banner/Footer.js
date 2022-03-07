import "./Banner.css";

function Footer(props) {
  const footer_text = props.text;
  return (
    <div>
      <table class="bannertable">
        <tr class="banner">
          <td class="bannertitle">
            <h1> {footer_text} </h1>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Footer;
