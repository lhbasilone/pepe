import { ColorRing } from 'react-loader-spinner'

const Loader = ( {loading = false }) => {
    return (
        loading &&
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#00dc96', '#ffb5d8', '#fef979', '#abbd81', '#849b87']}
        />
    )
}

export default Loader