import '@testing-library/jest-dom'
import Logo from '../../components/logo/Logo'
import {render} from '@testing-library/react'

describe("Header logo", () => {
    test("it should return an boolean", () => {
  
      const component = render(<Logo size="50"></Logo>);
      //console.log(component.container.querySelector('img'))
      
  
      expect(component.container.querySelector('img'))
    });

});