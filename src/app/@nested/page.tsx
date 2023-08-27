const someServerAction = () => {
    throw new Error()
}

const NestedPage = () => {
    const data = someServerAction();
    return (
        <div>
            <h1>NestedPage</h1>
        </div>
    )
}

export default NestedPage

// Only used to avoid having an error "Error occurred prerendering page "/"."
// as we are forcing to have an error
export const dynamic = 'force-dynamic'