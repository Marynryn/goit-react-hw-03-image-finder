

export const Button = ({ onClick }) => {
    return (
        <button type="button" onClick={() => onClick()}>
            {/* {loading ? 'Loading...' : 'Load more'} */}
            'Load more'
        </button >
    )
}
