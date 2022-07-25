import { request } from "./src/api"

const cached = {
    'roto': 'bassist'
}

const findMember = (memberName) => {
    if (cached[memberName]) {
        return Promise.resolve(cached[memberName])
    }

    return request(`/members/${memberName}`).then((member) => {
        cached[member.memberName] = memberName
        return memberName
    })
}

findMember('roto').then((memberName) => console.log(memberName))