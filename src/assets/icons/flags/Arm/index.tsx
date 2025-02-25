import React from 'react'

import Svg, { Circle, Defs, Image, Pattern, Use } from 'react-native-svg'

import type { TIcon } from '@/types'

const ArmIcon = ({ style, size, color }: TIcon) => (
	<Svg style={style} width={size || '46'} height={size || '46'} viewBox="0 0 46 46" fill="none">
		<Circle cx="23" cy="23" r="23" fill="url(#pattern0_186_261)" />
		<Defs>
			<Pattern
				id="pattern0_186_261"
				patternContentUnits="objectBoundingBox"
				width="1"
				height="1"
			>
				<Use
					xlinkHref="#image0_186_261"
					transform="translate(-0.954545) scale(0.00568182)"
				/>
			</Pattern>
			<Image
				id="image0_186_261"
				width="512"
				height="176"
				xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACwCAYAAAB5LdamAAAMlElEQVR4Ae3d0XHjOBYF0AeIM4ltBBvJBLRBbA4bwAbksYgpkKJbbrsbP/gQgKPaHsmEzMI7j1W4IilvKtutRKn/K5FSii+P8mWLDQQIECBAgMCrC3y3pF9rfUqxXYt/DQDPj49AsH/e/vwerwkQIECAAIEXFcjpy4f7a62v2SDtOZVrw7clWP+/ZbGRAAECBAi8tMA3ZwCu+dYz/tt12v9XIeA3v3/txzMBAgQIECDwYgK/+vxe1/0jAPw837rxCgPHm35+g58JECBAgACB1xdI8Wk9v9b2a+JbffG88cvrX0WIaw+eCRAgQIAAgZcTeF6+f17b6wf8/Lzx5WZvQgQIECBAgEB3gbr25+M0/9PX/+rPHgQIECBAgMA8As9r+7Xub1HPETy+6ncs/fU7gvPUrBICBAgQILCkQPp8DeBY249N9Wv/OUVeUkXRBAgQIEBgcQEBYPEDQPkECBAgsKaAALBm31VNgAABAosLCACLHwDKJ0CAAIE1BQSANfuuagIECBBYXEAAWPwAUD4BAgQIrCkgAKzZd1UTIECAwOICAsDiB4DyCRAgQGBNAQFgzb6rmgABAgQWFxAAFj8AlE+AAAECawoIAGv2XdUECBAgsLiAALD4AaB8AgQIEFhTQABYs++qJkCAAIHFBQSAxQ8A5RMgQIDAmgICwJp9VzUBAgQILC4gACx+ACifAAECBNYUEADW7LuqCRAgQGBxAQFg8QNA+QQIECCwpoAAsGbfVU2AAAECiwsIAIsfAMonQIAAgTUFBIA1+65qAgQIEFhcQABY/ABQPgECBAisKSAArNl3VRMgQIDA4gICwOIHgPIJECBAYE0BAWDNvquaAAECBBYXEAAWPwCUT4AAAQJrCggAa/Zd1QQIECCwuIAAsPgBoHwCBAgQWFNAAFiz76omQIAAgcUFBIDFDwDlEyBAgMCaAgLAmn1XNQECBAgsLiAALH4AKJ8AAQIE1hQQANbsu6oJECBAYHEBAWDxA0D5BAgQILCmgACwZt9VTYAAAQKLCwgAix8AyidAgACBNQUEgDX7rmoCBAgQWFxAAFj8AFA+AQIECKwpIACs2XdVEyBAgMDiAluUFBE56n89CBAgQIAAgXkFPtb6kmKLVCLKPm+1KiNAgAABAgQ+C6QcxyWAlD4ywec3+IkAAQIECBCYSuBa87/cA3ANTFWtYggQIECAwMIC363tXwLAs893v/A87jUBAgQIECDwmgKtNXyrNwBGlOPf9eZ6RaCUuq1eGqjPHgQIECBAgMBYAuca/v3aXm8CrN8CuNb44xsBZ3mpLv6lRgD3B4zVcLMlQIAAAQLn5/drLf/kcaz16bwJ8NOAHwgQIECAAIHpBba3XKKeHrjf97i+DHCdLpi+egUSIECAAIFJBeql/Lqen5f04/E6Iudz2/bnfpznj+18Ot54BYHzl6/rA5MKKYsAAQIECEwoUEr6+GB/rufn/X3p8bd/tv/Hv45r/SXKeb3/ccn/Sgz+RuCER4WSCBAgQGB6gf1a12ul19r+tC3l7b9l3/caC+r5gR8gx7cA3AT4A8QrAgQIECAwjkD9YH88rrX9sa7Xtb5eGtgi/RER9/N2weNywFMIqFtdARin22ZKgAABAgQ+BK4F/Pr4f33QT5HyLfJ2/D3g+kWB+obHc/2d456Az2HgY59eECBAgAABAi8ucK7rP9bzc42/pRx17d9yyVH/1Wv+x30AJR3PR1VHCPjtHwt88eJNjwABAgQIrCrwWNfrh/vH2l6f054i5xzbPb/FPb+fXxOoXxnIZxiIel/Acd1AAFj10FE3AQIECIwscP4//ZbHNf/yWNfr9f+U99hSyRE1DaQce9mj3Ot3BG9x3j14i/o1Ag8CBAgQIEBgLIHzbwDcI6db7PcaBvKx1pe9RF37fbwfq59mS4AAAQIEuggIAF0Y7YQAAQIECIwlIACM1S+zJUCAAAECXQQEgC6MdkKAAAECBMYSEADG6pfZEiBAgACBLgICQBdGOyFAgAABAmMJCABj9ctsCRAgQIBAFwEBoAujnRAgQIAAgbEEBICx+mW2BAgQIECgi4AA0IXRTggQIECAwFgCAsBY/TJbAgQIECDQRUAA6MJoJwQIECBAYCwBAWCsfpktAQIECBDoIiAAdGG0EwIECBAgMJaAADBWv8yWAAECBAh0ERAAujDaCQECBAgQGEtAABirX2ZLgAABAgS6CAgAXRjthAABAgQIjCUgAIzVL7MlQIAAAQJdBASALox2QoAAAQIExhIQAMbql9kSIECAAIEuAgJAF0Y7IUCAAAECYwkIAGP1y2wJECBAgEAXAQGgC6OdECBAgACBsQQEgLH6ZbYECBAgQKCLgADQhdFOCBAgQIDAWAICwFj9MlsCBAgQINBFQADowmgnBAgQIEBgLAEBYKx+mS0BAgQIEOgiIAB0YbQTAgQIECAwloAAMFa/zJYAAQIECHQREAC6MNoJAQIECBAYS0AAGKtfZkuAAAECBLoICABdGO2EAAECBAiMJSAAjNUvsyVAgAABAl0EBIAujHZCgAABAgTGEhAAxuqX2RIgQIAAgS4CAkAXRjshQIAAAQJjCQgAY/XLbAkQIECAQBcBAaALo50QIECAAIGxBASAsfpltgQIECBAoIuAANCF0U4IECBAgMBYAgLAWP0yWwIECBAg0EVAAOjCaCcECBAgQGAsAQFgrH6ZLQECBAgQ6CIgAHRhtBMCBAgQIDCWgAAwVr/MlgABAgQIdBHYcomo/6Ic/4mcb7Hv96edywhPGF4SIECAAIFBBOpano41/Vzb3yOXfCz3dd3f7nGPPe1RUkTse+y1rHSGgZL3iL2+9iBAgAABAgRGEih1ld/rqp5ij3t9ivd0r09R1/6txJ9RIkfUdb5urY/6XM8IlHRmgcdmTwQIECBAgMAYAueJ/T0i1zX+scjXpb0u8bHFtr2/RZQ9SpRIkaI83nT8XFLcj7eOUaxZEiBAgAABAqfAbU/n2n6cBSiRU4697Mdav73vsb0d5/5vUSNAihzluAhwnQqIyOdFAZ4ECBAgQIDAQAL3enb/41Hifqz3daVP8Xc9w/+/v/5dUjo/+ZfHc/25PurZgO3jusDHXrwgQIAAAQIEXlzgvV7gz/Wmvx/38qVS4lrzU/lPfUc6rw88Fv6jpuN1if24IfDFqzQ9AgQIECBA4JNAfnziP6//P4ZqGKjr+15iK28R6XbcEXDe/FfPAtTLAY9McO7g0z79QIAAAQIECLy4QF3/r7X847N8PRmQU5T3Elv6o1ZwnR447w18XAA4ftEVgBfvsOkRIECAAIFvBH69lu9R1/7nOwS++XWbCBAgQIAAgRkFBIAZu6omAgQIECDQEBAAGkCGCRAgQIDAjAICwIxdVRMBAgQIEGgICAANIMMECBAgQGBGAQFgxq6qiQABAgQINAQEgAaQYQIECBAgMKOAADBjV9VEgAABAgQaAgJAA8gwAQIECBCYUUAAmLGraiJAgAABAg0BAaABZJgAAQIECMwoIADM2FU1ESBAgACBhoAA0AAyTIAAAQIEZhQQAGbsqpoIECBAgEBDQABoABkmQIAAAQIzCggAM3ZVTQQIECBAoCEgADSADBMgQIAAgRkFBIAZu6omAgQIECDQEBAAGkCGCRAgQIDAjAICwIxdVRMBAgQIEGgICAANIMMECBAgQGBGAQFgxq6qiQABAgQINAQEgAaQYQIECBAgMKOAADBjV9VEgAABAgQaAgJAA8gwAQIECBCYUUAAmLGraiJAgAABAg0BAaABZJgAAQIECMwoIADM2FU1ESBAgACBhoAA0AAyTIAAAQIEZhQQAGbsqpoIECBAgEBDQABoABkmQIAAAQIzCggAM3ZVTQQIECBAoCEgADSADBMgQIAAgRkFBIAZu6omAgQIECDQEBAAGkCGCRAgQIDAjAICwIxdVRMBAgQIEGgICAANIMMECBAgQGBGAQFgxq6qiQABAgQINAQEgAaQYQIECBAgMKOAADBjV9VEgAABAgQaAgJAA8gwAQIECBCYUUAAmLGraiJAgAABAg0BAaABZJgAAQIECMwoIADM2FU1ESBAgACBhoAA0AAyTIAAAQIEZhQQAGbsqpoIECBAgEBDQABoABkmQIAAAQIzCggAM3ZVTQQIECBAoCEgADSADBMgQIAAgRkFBIAZu6omAgQIECDQEBAAGkCGCRAgQIDAjAICwIxdVRMBAgQIEGgICAANIMMECBAgQGBGga1VVCmtdxgnQIAAAQIEXk0gpd/PqBkAWjv4/e6NEiBAgAABAq8o8A8yiox6j/Y4TQAAAABJRU5ErkJggg=="
			/>
		</Defs>
	</Svg>
)

ArmIcon.displayName = 'ArmIcon'
export default ArmIcon
