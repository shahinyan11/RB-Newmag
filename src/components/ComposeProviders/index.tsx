import { ComponentType, ReactNode } from 'react'
import ChildrenProps from '@/types/Utils/ChildrenProps'

type ComposeProvidersProps = ChildrenProps & {
	/** Rendered child component */
	children: ReactNode

	/** Provider components go here */
	components: Array<ComponentType<ChildrenProps>>
}

function ComposeProviders({ components, children }: ComposeProvidersProps) {
	return components.reduceRight(
		(memo, Component) => <Component>{memo}</Component>,
		children,
	) as JSX.Element
}

ComposeProviders.displayName = 'ComposeProviders'
export default ComposeProviders
