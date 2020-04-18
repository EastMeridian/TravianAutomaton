const {
  parseToolboxContent,
} = require('../utils');

describe('parseToolboxContent', () => {
  it('should return the right array', () => {
    const toolboxContent = 'Coût pour le niveau 3:<br /><div class="inlineIconList resourceWrapper"><div class="inlineIcon resources" title=""><i class="r1"></i><span class="value ">110</span></div><div class="inlineIcon resources" title=""><i class="r2"></i><span class="value ">280</span></div><div class="inlineIcon resources" title=""><i class="r3"></i><span class="value ">140</span></div><div class="inlineIcon resources" title=""><i class="r4"></i><span class="value ">165</span></div></div>';
    const result = parseToolboxContent(toolboxContent);
    expect(result).toStrictEqual([110, 280, 140, 165]);
  });
});
