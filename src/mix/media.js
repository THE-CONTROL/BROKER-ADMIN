import { ref } from "vue";

export default function useComp(initialParam = "Composable data") {
  async function upImg(e, newPic) {
    const fileList = e.target.files || e.dataTransfer.files;
    const file = fileList[0];
    if (file) {
      var fileType = file.type;
    }
    if (fileType) {
      var fileGroup = fileType.split("/")[0];
    }
    if (fileGroup !== "image") {
      alert("The upload is not an image!");
      newPic();
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async (e) => {
        try {
          newPic(e.target.result);
        } catch {}
      };
    }
  }

  return { upImg };
}
