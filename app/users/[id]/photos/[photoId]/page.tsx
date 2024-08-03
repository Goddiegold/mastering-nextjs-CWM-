
interface Props {
    params: { id: number, photoId: number }
}


const PhotoPage = ({ params: { id, photoId} }: Props) => {
    return (
        <div>
            PhotosPage - {id} - {photoId}
        </div>
    );
}

export default PhotoPage;