const bcrypt = require('bcrypt')

const encryption = {

    hashPwd(originalPwd){
        const hashedPwd = bcrypt.hashSync(originalPwd, 10)
        return hashedPwd
    },

    matchPwd(originalPwd, encryptedPwd){
        const matchedOrNot = bcrypt.compareSync(originalPwd, encryptedPwd)

        return matchedOrNot ? true : false;
    }
}

module.export = encryption