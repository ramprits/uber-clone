import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { styled } from "nativewind";

type ExpoImageProps = {
  uri: string;
  width?: number;
  height?: number;
  style?: string;
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const StyledImage = styled(Image);

const ExpoImage: React.FC<ExpoImageProps> = ({
  uri,
  width = 100,
  height = 100,
  style,
}) => {
  return (
    <View className={`justify-center items-center ${style}`}>
      <StyledImage
        source={uri}
        style={{ width, height }}
        className="rounded-md"
        contentFit="contain"
        placeholder={{ blurhash }}
      />
    </View>
  );
};

export default ExpoImage;
