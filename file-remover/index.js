const fs = require('fs')

const path = `./${process.argv[2]}`

try {
  fs.unlinkSync(path)
  console.log(`File ${process.argv[2]} removed successfully`)
} catch(err) {
  console.error(err)
}

