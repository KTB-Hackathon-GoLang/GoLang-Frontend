import * as S from "./Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingImage from "../../assets/loadingPage.png";

export const Loading = () => {
  const navigation = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigation("/main");
    }, 2500);
  }, []);
  return (
    <S.Loading
      style={{
        backgroundImage: `url(${LoadingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></S.Loading>
  );
};
