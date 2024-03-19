
type Props = {
  isMarked: boolean,

}

export default function Star({ isMarked }: Props) {
  return (
    <>
      {isMarked ? (
        <img src="src/assets/images/star_yellow.svg" alt="" />
      ) : (
        <img src="src/assets/images/star_grey.svg" alt="" />
      )}
    </>
  );
}
