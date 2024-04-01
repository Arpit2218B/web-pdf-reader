import { Drawer, Tour } from 'antd';
import React, { useState } from 'react';
import { useStateValue } from '../../store';

const Viewer = ({ ref1, ref2, ref3, ref4, ref5 }) => {
  const [open, setOpen] = useState(true);

  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];


  return (
    <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
  )
}

export default Viewer;