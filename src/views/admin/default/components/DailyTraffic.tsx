// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import BarChart from 'components/charts/BarChart';

// Custom components
import Card from 'components/card/Card';
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from 'variables/charts';

// Assets
import { RiArrowUpSFill } from 'react-icons/ri';

export default function DailyTraffic(props: { [x: string]: any }) {
	const { ...rest } = props;

	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Card alignItems='center' flexDirection='column' w='100%' {...rest}>
			<Flex justify='space-between' align='start' px='10px' pt='5px' w='100%'>
				<Flex flexDirection='column' align='start' me='20px'>
					<Flex w='100%'>
						<Text me='auto' color='secondaryGray.600' fontSize='sm' fontWeight='500'>
							Daily Traffic
						</Text>
					</Flex>
					<Flex align='end'>
						<Text color={textColor} fontSize='34px' fontWeight='700' lineHeight='100%'>
							2.579
						</Text>
						<Text ms='6px' color='secondaryGray.600' fontSize='sm' fontWeight='500'>
							Visitors
						</Text>
					</Flex>
				</Flex>
				<Flex align='center'>
					<Icon as={RiArrowUpSFill as unknown as React.ElementType} color='green.500' />
					<Text color='green.500' fontSize='sm' fontWeight='700'>
						+2.45%
					</Text>
				</Flex>
			</Flex>
			<Box h='240px' mt='auto'>
				<BarChart chartData={barChartDataDailyTraffic} chartOptions={barChartOptionsDailyTraffic} />
			</Box>
		</Card>
	);
}
