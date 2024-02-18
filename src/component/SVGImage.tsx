import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

interface SVGImageProps {
	onPress?: () => void;
	child: React.ReactNode;
	style?: StyleProp<ViewStyle> | undefined;
}

const SVGImage: React.FC<SVGImageProps> = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View>
				<View style={props.style}>{props.child}</View>
			</View>
		</TouchableOpacity>
	);
};

export default SVGImage;
