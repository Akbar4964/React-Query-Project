import styled from "styled-components";

export const Header = styled.div`
  .img1 {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  .img2 {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  .none {
    display: none;
  }
  .img1:hover ~ .img2 {
    display: block;
  }
  .img1:hover {
    display: none;
  }
`;