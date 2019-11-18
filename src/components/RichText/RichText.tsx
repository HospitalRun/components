import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

import 'tinymce/tinymce'

// Basic tinyMCE theme & skins required for editor to display
import 'tinymce/themes/silver/theme.min'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'

// Import required plugins
import 'tinymce/plugins/autolink/plugin.min'
import 'tinymce/plugins/lists/plugin.min'
import 'tinymce/plugins/link/plugin.min'
import 'tinymce/plugins/table/plugin.min'
import 'tinymce/plugins/paste/plugin.min'
import 'tinymce/plugins/charmap/plugin.min'

interface Props {
  // id of the rich text editor component
  id?: string
  // Initial value of the rich text editor
  value?: string
  // Defines whether the rich text editor should be enabled/disabled (default = false)
  disabled?: boolean
  // Height of the rich text editor
  height?: number
  // Method run on the editors onEditorChange event. Returns editor content as HTML.
  onChange?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

const RichText = (props: Props) => {
  const { id, value, disabled, height, onChange } = props

  return (
    <Editor
      id={id}
      initialValue={value}
      init={{
        height: height || 500,
        menubar: true,
        statusbar: false,
        // skin & content_css are set to 'false' to avoid tinyMCE looking to fetch files when they are already imported above.
        skin: false,
        // eslint disabled on next line due to TinyMCE option attribute naming.
        // eslint-disable-next-line @typescript-eslint/camelcase
        content_css: false,
        plugins: [`autolink lists link table paste charmap`],
        toolbar: [
          `undo redo | formatselect fontselect fontsizeselect | bold italic underline sub sup backcolor |
        alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table link removeformat`,
        ],
        branding: false,
      }}
      disabled={disabled}
      onEditorChange={(content) => onChange && onChange(content)}
    />
  )
}

export { RichText }
