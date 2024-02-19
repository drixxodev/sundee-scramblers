import PropTypes from "prop-types";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";
import { btnImg } from "./screenheader.style";
interface ScreenHeaderBtnProps {
  iconUrl: any;
  dimension: number;
  handlePress: () => void;
}
const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={btnImg(dimension)} />
    </TouchableOpacity>
  );
};

ScreenHeaderBtn.propTypes = {
  iconUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // number for handling local images (required by react-native)
  dimension: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default ScreenHeaderBtn;
