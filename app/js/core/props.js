const props = {
  rotation: 0.025,
  postprocessing: false
};

function setUpDat() {
  const gui = new dat.GUI();
  gui.add(props, 'rotation', 0, 0.2);
  gui.add(props, "postprocessing");
  gui.close();
}

export default props;
export { setUpDat };
