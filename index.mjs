for(;;) {
  let componentName = await question('What is the component name ?\n')

  await $`mkdir ${componentName}`
  cd(componentName)
  await $`touch ${componentName}.tsx`
  await $`echo "import React from 'react';
import {Text} from 'react-native';

interface ${componentName}Props {}

const ${componentName} = ({}: ${componentName}Props) => {
  return (
    <>
      <Text>${componentName}</Text>
    </>
  );
};

export default ${componentName};
" > ${componentName}.tsx`
  cd("..")
}