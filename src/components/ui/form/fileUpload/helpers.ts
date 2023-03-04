export const readFileThenGenerateUrl = (
  File: File,
  onLoad: (url: string) => void
) => {
  const reader = new FileReader();
  reader.onload = () => {
    const url = reader.result as string;
    onLoad(url);
  };

  reader.readAsDataURL(File);
};
