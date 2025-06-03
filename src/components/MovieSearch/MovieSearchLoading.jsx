export const MovieSearchLoading = () => {
    return (
        <div className='flex justify-end w-full z-20 absolute right-0 md:pr-12 mt-12 px-4 md:px-0'>
            <div className='items-center w-full md:w-60 border border-border rounded-b-md max-h-80 bg-tertiary px-2 py-2 overflow-auto flex flex-col gap-2'>
                <div className="w-5 h-5 border-white border-l-2 rounded-full animate-spin"></div>
            </div>
        </div>
    )
}
