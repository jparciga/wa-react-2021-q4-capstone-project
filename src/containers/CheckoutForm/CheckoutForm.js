
const CheckoutForm = () => {
    return (
      <table>
      <tr>
        <td colSpan="2"><h1>Customer Information.</h1></td>
      </tr>
        <tr>
          <td>Name</td>
          <td><input type="text"></input></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type="text"></input></td>
        </tr>
        <tr>
          <td>ZipCode</td>
          <td><input type="text"></input></td>
        </tr>
        <tr>
          <td>Notes</td>
          <td><textarea></textarea></td>
        </tr>
      </table>
    );
  };

  export default CheckoutForm;