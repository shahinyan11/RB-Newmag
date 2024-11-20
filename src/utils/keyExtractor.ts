const keyExtractor = (item: any, index: number) => item?.id ?? index.toString()

export default keyExtractor
