const codes = [
  {
    title: "Teleport Script",
    tag: "Utility",
    img: "https://static.wikia.nocookie.net/roblox/images/f/f3/Teleport.png",
    desc: "ย้ายผู้เล่นไปยังตำแหน่งใหม่ในเกม",
    code: `local player = game.Players.LocalPlayer
player.Character:MoveTo(Vector3.new(0,10,0))`
  },
  {
    title: "Give Tool Script",
    tag: "Item",
    img: "https://static.wikia.nocookie.net/roblox/images/9/9a/Sword_icon.png",
    desc: "แจกเครื่องมือให้ผู้เล่นเมื่อเข้าร่วมเกม",
    code: `local tool = Instance.new("Tool")
tool.Name = "MagicSword"
tool.Parent = game.Players.LocalPlayer.Backpack`
  },
  {
    title: "Speed Boost",
    tag: "Effect",
    img: "https://static.wikia.nocookie.net/roblox/images/6/6a/SpeedPotion.png",
    desc: "เพิ่มความเร็วให้ผู้เล่นชั่วคราว",
    code: `local char = game.Players.LocalPlayer.Character
char.Humanoid.WalkSpeed = 50`
  }
];
